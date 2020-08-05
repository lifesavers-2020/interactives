import { createContext } from "react";
import { observable, action } from "mobx";
import { CellDifferentiation } from "../pages/CellDifferentiation";
import { StemCellTreatment } from "../pages/StemCellTreatment";
import { YoungDonorWalking } from "../pages/YoungDonorWalking";
import { MoreCollectableStemCellsInMale } from "../pages/MoreCollectableStemCellsInMale";
import { PeripheralBloodDonation } from "../pages/PeripheralBloodDonation";
import { FindingMatchTakesTime } from "../pages/FindingMatchTakesTime";
import { GoThroughForm } from "../pages/GoThroughForm";
import { SwabbingKit } from "../pages/SwabbingKit";
import { SignForm } from "../pages/SignForm";
import { FindingMatch } from "../pages/FindingMatch";

interface RouteDefinition {
  path: string;
  component: React.FC<any>;
}

export const pages: RouteDefinition[] = [
  { path: "/", component: CellDifferentiation },
  { path: "/stem-cell-treatment", component: StemCellTreatment },
  { path: "/young-donor", component: YoungDonorWalking },
  { path: "/finding-match", component: FindingMatch },
  {
    path: "/more-collectable-stem-cells-in-male",
    component: MoreCollectableStemCellsInMale,
  },
  { path: "/peripheral-blood-donation", component: PeripheralBloodDonation },
  { path: "/find-match-takes-time", component: FindingMatchTakesTime },
  { path: "/go-through-form", component: GoThroughForm },
  { path: "/swabbing-kit", component: SwabbingKit },
  { path: "/sign-form", component: SignForm },
];

export class PageStore {
  private static _instance: PageStore;
  private static _context: React.Context<PageStore>;

  @observable public afterIntro = false;
  @observable public direction = 0;
  @observable public page = pages.findIndex(
    r => r.path === window.location.pathname
  );

  /* To prevent user click next before seeing the content */
  @observable public pageLimit = this.page;

  public static instance() {
    if (!this._instance) this._instance = new PageStore();
    return this._instance;
  }

  public static context() {
    if (!this._context) this._context = createContext(this.instance());
    return this._context;
  }

  @observable public percentage() {
    return (this.page / (pages.length - 1)) * 100;
  }

  @observable public canGoNext() {
    return this.page < pages.length - 1 && this.page < this.pageLimit;
  }

  @observable public canGoPrevious() {
    return this.page > 0;
  }

  @observable public isViewedPage() {
    return this.page < this.pageLimit;
  }

  @action public pushPageLimit() {
    this.pageLimit = Math.max(this.pageLimit, this.page + 1);
  }

  @action public nextPage() {
    if (this.canGoNext()) {
      this.page++;
      this.direction = 1;
    }
    return pages[this.page].path;
  }

  @action public previousPage() {
    if (this.canGoPrevious()) {
      this.page--;
      this.direction = -1;
    }
    return pages[this.page].path;
  }

  @action public syncPage(location: string) {
    const i = pages.findIndex(r => r.path === location);
    if (i === this.page) return;
    this.page = i;
  }

  @action public finishIntro() {
    this.afterIntro = true;
  }
}
