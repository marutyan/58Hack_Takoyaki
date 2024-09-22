'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/src/app/components/ui/card"
import { Progress } from "@/src/app/components/ui/progress"
import { Button } from "@/src/app/components/ui/button"
import { ChevronLeft, Trophy, BarChart2, Users } from "lucide-react"
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

export default function Component() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalPosts: 0,
    categoryCounts: {},
    genderRatio: { male: 0, female: 0 },
    topCategories: []
  })

  useEffect(() => {
    const fetchStats = async () => {
      const data = {
        totalPosts: 100,
        categoryCounts: {
          "制服": 30,
          "頭髪": 25,
          "学外について": 20,
          "身だしなみ": 15,
          "登校について": 5,
          "学業について": 5
        },
        genderRatio: { male: 45, female: 55 },
      }

      const sortedCategories = Object.entries(data.categoryCounts)
        .sort(([, a], [, b]) => b - a)
        .map(([category, count]) => ({ category, count }))

      setStats({
        ...data,
        topCategories: sortedCategories.slice(0, 3)
      })
    }

    fetchStats()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-4 left-4 z-10 hover:bg-white/50 transition-colors duration-200"
        onClick={() => router.push('/HomePage')}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
        <span className="sr-only">戻る</span>
      </Button>

      <main className="flex-1 p-6 pt-20 space-y-8 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-lg border-t-4 border-[#E29D36]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800">総投稿数</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-7xl font-bold text-center text-[#E29D36]">{stats.totalPosts}</p>
              <p className="text-center text-gray-600 mt-2 font-medium">これまでの全ての投稿数です</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-white shadow-lg border-t-4 border-[#E29D36]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center justify-center text-gray-800">
                <Trophy className="mr-2 text-[#E29D36]" />
                トップ3カテゴリ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {stats.topCategories.map((category, index) => (
                  <motion.div
                    key={category.category}
                    className={`space-y-2 p-4 rounded-lg ${index === 0 ? 'bg-[#FDF6E9]' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${index === 0 ? 'text-2xl' : index === 1 ? 'text-xl' : 'text-lg'} text-gray-800`}>
                        {index + 1}. {category.category}
                      </span>
                      <span className={`font-bold ${index === 0 ? 'text-2xl' : index === 1 ? 'text-xl' : 'text-lg'} text-[#E29D36]`}>
                        {category.count}投稿
                      </span>
                    </div>
                    <Progress value={(category.count / stats.totalPosts) * 100} className="h-3 bg-gray-200" indicatorClassName="bg-[#E29D36]" />
                    <p className={`text-sm text-gray-600 ${index === 0 ? 'font-semibold' : ''}`}>
                      全体の{Math.round((category.count / stats.totalPosts) * 100)}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg border-t-4 border-[#E29D36]">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center text-gray-800">
                  <BarChart2 className="mr-2 text-[#E29D36]" />
                  カテゴリ別投稿数
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(stats.categoryCounts).map(([category, count], index) => (
                    <motion.div
                      key={category}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="font-medium text-[#E29D36]">{count}投稿</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white shadow-lg border-t-4 border-[#E29D36]">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center text-gray-800">
                  <Users className="mr-2 text-[#E29D36]" />
                  投稿者の男女比
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">男性</span>
                      <span className="font-medium text-[#E29D36]">{stats.genderRatio.male}%</span>
                    </div>
                    <Progress value={stats.genderRatio.male} className="h-3 bg-gray-200" indicatorClassName="bg-[#E29D36]" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">女性</span>
                      <span className="font-medium text-[#E29D36]">{stats.genderRatio.female}%</span>
                    </div>
                    <Progress value={stats.genderRatio.female} className="h-3 bg-gray-200" indicatorClassName="bg-[#E29D36]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center font-medium">投稿者の性別分布を示しています</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}