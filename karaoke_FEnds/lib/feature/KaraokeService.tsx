import { setUsername } from "./userSlice";
import { AppDispatch } from "../Store/store";

export class KaraokeServices {
  private dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  setUsernameRedux(username: string) {
    this.dispatch(setUsername(username));
  }

  clearUsernameRedux(){
    this.dispatch(setUsername(""))
  }
}
