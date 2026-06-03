# HAKURO / 白露 Brand Proposal

## ブランドコンセプト

HAKURO は、日本の湿度と都市生活に寄り添う国内向けプレミアムアパレルブランドです。朝の光に残る白露のように、過剰に主張せず、着る人の輪郭を静かに整える服を提案します。

コア価値は「静けさ」「素材の納得感」「日本の気候への適応」「透明性」です。ロゴや装飾ではなく、余白、触感、仕立て、情報開示によって高級感と信頼感を作ります。

## ターゲット顧客

30代から40代の都市生活者。仕事と週末を自然に行き来できる服を求め、流行よりも品質、ロゴよりも素材、安さよりも長く着られる納得感を重視する顧客を想定します。

## サイト構成

1. Hero Section: ブランド名と世界観を第一ビューで強く提示
2. ブランドストーリー: 価値観、素材、生産背景、ターゲットを説明
3. Featured Collection: 2026年春夏の主要コレクションを編集的に紹介
4. 商品一覧: ECとしての購買導線を明確化
5. ベストセラー: 売れている理由を言語化し信頼を補強
6. Lookbook: 生活時間と都市風景で服の世界観を提示
7. レビュー: サイズ、品質、梱包、ケアの不安を軽減
8. FAQ: 国内ECで重要な返品、サイズ、生産、ケアを整理
9. Newsletter登録: 月次の入荷・読み物導線
10. Contact: サイズ相談、ショールーム予約、カスタマーケア
11. Footer: ブランド名、導線、ポリシー情報

## デザイン方針

2026年のEC/ブランドサイトの方向性として、ラグジュアリー・ミニマリズム、モバイルファースト、高品質な写真、タイポグラフィ主導、透明性のある品質情報、控えめなモーションを採用しています。

配色は単色のミニマルに寄せすぎず、paper、ink、mist、clay、moss を使い、温度のある静けさを表現します。カードの乱用や派手な装飾を避け、写真のトリミング、余白、罫線、階層化された文字組みで高級感を作ります。

## 必要コンポーネント一覧

- Header
- MobileNav
- Hero
- BrandStory
- FeaturedCollection
- ProductGrid
- ProductCard
- BestSellers
- Lookbook
- Reviews
- FAQ
- Newsletter
- Contact
- Footer
- Button
- SectionHeading

## 技術方針

Next.js App Router、TypeScript、Tailwind CSSで構成します。ブランドデータとUIを分離し、商品やレビューの更新は `src/lib/brand.ts` で管理できます。SEO は `metadata`、OGP、robots、manifest を設定し、画像は Next Image で最適化対象にしています。

## 改善提案

- 商品詳細ページ、カート、チェックアウト導線の追加
- microCMS、Shopify、Next Commerce などとの連携
- 実画像の撮影アートディレクションと差し替え
- サイズレコメンド、在庫通知、再入荷メールの追加
- 構造化データ Product / FAQPage の追加
- Lighthouse 計測後の画像サイズ、LCP、CLS 最適化
- Storybook または Playwright によるUI回帰テスト

