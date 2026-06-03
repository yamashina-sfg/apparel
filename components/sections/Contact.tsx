import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-clay">Contact</p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-ink md:text-7xl">相談できるEC。</h2>
          <p className="mt-6 text-sm leading-8 text-soot/70">
            サイズ、素材、ギフト、法人スタイリングの相談を受け付けます。ECでありながら、店舗で話すような安心感を設計します。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-ink/10 p-6">
            <p className="font-serif text-3xl text-ink">Customer Care</p>
            <p className="mt-4 text-sm leading-7 text-soot/70">平日 10:00-18:00 / 返信目安 1営業日以内</p>
            <Button href="mailto:care@hakuro.example" variant="ghost" className="mt-6">
              メールする
            </Button>
          </div>
          <div className="border border-ink/10 p-6">
            <p className="font-serif text-3xl text-ink">Showroom</p>
            <p className="mt-4 text-sm leading-7 text-soot/70">東京都港区南青山 予約制。月2回、試着会を開催。</p>
            <Button href="#" variant="ghost" className="mt-6">
              予約する
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
