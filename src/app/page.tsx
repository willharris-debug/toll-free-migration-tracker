import fs from "fs";
import path from "path";
export default function TrackerPage() {
  const fullHtml = fs.readFileSync(path.join(process.cwd(), "tracker.html"), "utf-8");
  const styleMatch = fullHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return (<><style dangerouslySetInnerHTML={{ __html: styleMatch?.[1] ?? "" }} />
    <div dangerouslySetInnerHTML={{ __html: bodyMatch?.[1] ?? "" }} style={{ width: "100%", minHeight: "100vh" }} /></>);
}
