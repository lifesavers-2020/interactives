import { createContext } from "react";
import { observable, action } from "mobx";

export class SignStore {
  private static _instance: SignStore;
  private static _context: React.Context<SignStore>;

  @observable public isDrawing = false;

  public static instance() {
    if (!this._instance) this._instance = new SignStore();
    return this._instance;
  }

  public static context() {
    if (!this._context) this._context = createContext(this.instance());
    return this._context;
  }

  public draw(x: number, y: number, ctx: CanvasRenderingContext2D) {
    if (!this.isDrawing) return;
    this._draw(x, y, ctx);
  }

  @action public beginDrawing(
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.isDrawing = true;
    this.draw(x, y, ctx);
  }

  @action public endDrawing(
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D
  ) {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    ctx.beginPath();
  }

  private _draw(x: number, y: number, ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}
