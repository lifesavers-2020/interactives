import { useLocation } from "wouter";
import { createContext } from "react";
import { observable, action } from "mobx";
import { routes } from "../Router";

export class PageStore {
  private static _instance: PageStore;
  private static _context: React.Context<PageStore>;

  public location = useLocation()[0];
  public setLocation = useLocation()[1];

  @observable public direction = 0;
  @observable public page = routes.findIndex(r => r.path === this.location);

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
    return (this.page / (routes.length - 1)) * 100;
  }

  @observable public canGoNext() {
    return this.page < routes.length - 1 && this.page < this.pageLimit;
  }

  @observable public canGoPrevious() {
    return this.page > 0;
  }

  @action public pushPageLimit() {
    this.pageLimit = Math.max(this.pageLimit, this.page + 1);
  }

  @action public nextPage() {
    if (!this.canGoNext()) return;
    this.page++;
    this.direction = 1;
    this.setLocation(routes[this.page].path);
  }

  @action public previousPage() {
    if (!this.canGoPrevious()) return;
    this.page--;
    this.direction = -1;
    this.setLocation(routes[this.page].path);
  }
}
