import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>hello</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary" disabled>
        teritary
      </Button>
    </div>
  );
}
