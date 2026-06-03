import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="bg-mist px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-clay">Newsletter</p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-ink md:text-6xl">入荷と読み物を、月に一度。</h2>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="min-h-12 border border-ink/15 bg-paper px-4 text-sm text-ink outline-none transition placeholder:text-soot/40 focus:border-ink/50"
          />
          <Button href="#" variant="dark" className="w-full sm:w-auto">
            登録する
          </Button>
          <p className="text-xs leading-6 text-soot/60 sm:col-span-2">新作、再入荷、素材のケアガイドをお届けします。配信停止はいつでも可能です。</p>
        </form>
      </div>
    </section>
  );
}
