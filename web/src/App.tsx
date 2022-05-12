import { FeedbackInfo } from "./components/FeedbackInfo"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Widget } from "./components/Widget"

export function App() {
  return <div>
    <ThemeSwitcher />
    <FeedbackInfo />
    <Widget />
  </div>
}