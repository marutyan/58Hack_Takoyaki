'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/src/app/components/ui/avatar"
import { Button } from "@/src/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/app/components/ui/tabs"
import { ArrowLeft, Mail, User, Heart } from "lucide-react"

export default function Component() {
    const router = useRouter()
  const [user] = useState({
    username: "山田太郎",
    email: "taro.yamada@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
  })

  const [userPosts] = useState([
    { 
      id: 1, 
      title: "制服のスカート丈について",
      content: "スカート丈をもう少し短くしても良いのではないでしょうか。", 
      timestamp: "2023-06-15", 
      likes: 12, 
      category: "制服",
    },
    { 
      id: 2, 
      title: "髪色規制の緩和",
      content: "髪を染める程度をもう少し緩和してほしいです。", 
      timestamp: "2023-06-10", 
      likes: 8,
      category: "頭髪",
    },
  ])

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
      <Button 
          variant="ghost" 
          className="mb-4 text-[#E29D36] hover:text-white hover:bg-[#E29D36]"
          onClick={() => router.push('/HomePage')}
        >          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </Button>
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-[#E29D36] text-white rounded-t-lg">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20 border-2 border-white">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback className="bg-white text-[#E29D36]">{user.username[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">{user.username}</CardTitle>
                <CardDescription className="flex items-center mt-1 text-white/80">
                  <Mail className="mr-2 h-4 w-4" />
                  {user.email}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white border-b border-gray-200">
                <TabsTrigger 
                  value="posts" 
                  className="data-[state=active]:bg-[#E29D36] data-[state=active]:text-white"
                >
                  自身の投稿
                </TabsTrigger>
                <TabsTrigger 
                  value="info" 
                  className="data-[state=active]:bg-[#E29D36] data-[state=active]:text-white"
                >
                  ユーザー情報
                </TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                <div className="space-y-4 mt-4">
                  {userPosts.map((post) => (
                    <Card key={post.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader className="bg-white border-b border-gray-100">
                        <CardTitle className="text-[#000000]">{post.title}</CardTitle>
                        <CardDescription>{post.timestamp}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p>{post.content}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm text-[#000000] font-medium">{post.category}</span>
                          <span className="flex items-center text-sm text-pink-500">
                            <Heart className="h-4 w-4 mr-1 fill-pink-500 text-pink-500" />
                            {post.likes}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="info">
                <div className="space-y-4 mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-[#E29D36]" />
                    <span className="font-semibold text-[#E29D36]">ユーザー名:</span>
                    <span>{user.username}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-[#E29D36]" />
                    <span className="font-semibold text-[#E29D36]">メールアドレス:</span>
                    <span>{user.email}</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}