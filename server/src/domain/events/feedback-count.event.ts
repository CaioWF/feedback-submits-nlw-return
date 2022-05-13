import { io } from "../../app";
export class FeedbackCountEvent {
  emit(count: number): void {
    io.emit("feedback:count", { count });
  }
}
