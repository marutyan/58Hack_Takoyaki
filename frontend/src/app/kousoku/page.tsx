import Link from 'next/link'
import { Button } from "@/src/app/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/src/app/components/ui/card"
import { ArrowLeft } from "lucide-react"

const schoolRules = [
  {
    category: "1 登校・下校",
    rules: [
      "午前7時から8時20分（学級タイム[T]開始）までの間に登校する。8時25分以降は遅刻とする。",
      "各時間の授業について、15分以上遅刻した者は欠課扱いとなる。",
      "下校時刻は年間を通じて午後5時とし、以後の居残りは原則として認めない。",
      "長期休業中の下校時刻は午後4時30分とする。",
      "始業時刻から終業時刻まで外出しないことを原則とする。",
      "早退をする場合は、養護教諭もしくは担任の許可を得て下校し、自宅に到着後担任に電話する。",
      "オートバイ・自転車による通学は禁止する。",
      "土曜・日曜・祝日等の休校日について、土曜講習と部活動以外は登校しないことを原則とする。",
      "土曜・日曜・祝日は、自習室を使用することはできない。",
      "閉庁日及び12月29日から1月3日は登校禁止とする。"
    ]
  },
  {
    category: "2 服装・頭髪",
    rules: [
      "本校生徒は本校の定める制服を着用する。上着（学ラン、ブレザー）には本校制定のバッジを必ず付ける。",
      "ワイシャツ及びブラウスの色は白色に限り、ポロシャツ及びカラーシャツは不可とする。",
      "登下校時は上着を着用する。ただし、気候に応じて上着なしも可とする。",
      "カーディガン、セーター、ベストのみの登下校は不可とする。",
      "カーディガン、セーター、ベストを上着の下に着用する場合は、色は単色で黒、紺、グレー、白、茶、クリームのみとする。",
      "気候に応じてグレー色のスラックス、スカートも可とする。",
      "パーカー及びトレーナーは不可とする。",
      "コート、靴等は華美なものをさける。",
      "土曜、日曜、祝日及び休業中に登校する場合も定められた制服で登校する。",
      "やむを得ない事情で前記以外の服装をする場合には、諸届欄にその旨を記入し学級担任の許可を受ける。",
      "頭髪に手を加えてはならない。"
    ]
  },
  {
    category: "3 その他",
    rules: [
      "教科担任不在による自習の際は教室で学習する。教室の外に出たり、自習室を使用したりしないこと。",
      "登校・下校の際は掲示物に注意を払う。",
      "校内設備並びに教具等を破損した場合には、関係の先生に申し出て指示を受ける。場合によっては弁償の責任を負うこともある。",
      "所属教室、所属部室以外の場所の使用を希望する場合には、あらかじめ許可を得ること。",
      "所持品の管理に留意し、必ず学年、組、氏名を記入する（教室移動及び部活動の際、貴重品は必ずロッカーに入れて施錠するか、現場に持っていくこと）。",
      "掲示物については、生活指導部の指導の下、認印を貰った上で、所定の場所に掲示する。",
      "印刷物の配布については事前に生活指導部の許可を得る。",
      "エレベーターについては、生徒の使用を禁止する。"
    ]
  }
]

export default function SchoolRules() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-8">
        <Link href="/HomePage" passHref>
        <Button 
          variant="ghost" 
          className="mb-4 text-[#E29D36] hover:text-white hover:bg-[#E29D36]"        >          
            <ArrowLeft className="mr-2 h-4 w-4" />
            戻る
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-[#E29D36] mb-2">校則一覧</h1>
        <p className="text-[#636363]">本校の校則をカテゴリ別に掲載しています。</p>
      </header>

      <main>
        <div className="space-y-6">
          {schoolRules.map((category, index) => (
            <Card key={index} className="border-[#E29D36] bg-white">
              <CardHeader className="bg-[#E29D36] text-white">
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <ol className="list-decimal pl-5 space-y-2">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="text-[#636363]">{rule}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-[#636363] text-sm">
        <p>© {new Date().getFullYear()} 学校名. All rights reserved.</p>
      </footer>
    </div>
  )
}