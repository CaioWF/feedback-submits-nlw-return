import { Bug } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { socket } from "../lib/ws";

export function FeedbackInfo() {
  const [countFeedbacks, setCountFeedbacks] = useState(0)
  
  useEffect(() => {
    api.get("/feedbacks/count").then(res => {
      setCountFeedbacks(res.data.count)
    })
  });
  
  socket.on('feedback:count', ({count}) => {
    setCountFeedbacks(count)
  })
  
  return (
    <div className=" flex flex-col justify-center items-center h-screen gap-5">
      <Bug weight="bold" className="w-24 h-24 text-brand-500" />
      <div className="text-xl md:text-5xl text-zinc-900 dark:text-white">Essa página nunca quebrou!!!</div>
      <div className="text-lg md:text-3xl text-zinc-700 dark:text-zinc-200">Feedbacks recebidos: <span className="font-bold text-brand-300">{countFeedbacks}</span></div>
    </div>
  );
}