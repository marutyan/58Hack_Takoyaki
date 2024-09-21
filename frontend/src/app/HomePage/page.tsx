'use client'

import { use, useEffect, useState } from 'react'
import { Button } from "@/src/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/app/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/app/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/app/components/ui/dialog"
import { Input } from "@/src/app/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/app/components/ui/select"
import { Textarea } from "@/src/app/components/ui/textarea"
import { Bell, Book, ChevronRight, Heart, History, Menu, PlusCircle, Search, User } from "lucide-react"


type Post = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    likes: number;
    category: string;
    gender: string;
    age: string;
    details: string;
  }
  
  // 可能なorder値の定義
  type SortOrder = 'latest' | 'oldest' | 'mostLiked'

  export default function Page() {
    const [fetchPosts, setFetchPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/posts').then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      setFetchPosts(data)
    })
  }, [])

  const [posts] = useState<Post[]>([
    { 
      id: 1, 
      title: "制服のスカート丈について",
      content: "スカート丈をもう少し短くしても良いのではないでしょうか。", 
      created_at: "5分前", 
      likes: 12, 
      category: "制服",
      gender: "女性",
      age: "2年生",
      details: "現在の校則では膝下5cmとなっていますが、膝上5cmまで認めてほしいです。夏場は特に暑いので、少し短くなることで快適になると思います。"
    },
    { 
      id: 2, 
      title: "髪色規制の緩和",
      content: "髪を染める程度をもう少し緩和してほしいです。", 
      created_at: "30分前", 
      likes: 8,
      category: "頭髪",
      gender: "男性",
      age: "3年生",
      details: "現在は黒髪のみ許可されていますが、茶色程度までは認めてほしいです。個性を表現する一つの方法として、髪色の選択肢を増やすことを提案します。"
    },
  ])

  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>('latest')
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "衣類",
    "頭髪",
    "制服",
    "学外について",
    "身だしなみ",
    "登校について",
    "学業について"
  ]

  const sortPosts = (fetchPosts : Post[], order: SortOrder): Post[] => {
    switch (order) {
      case "latest":
        return [...fetchPosts].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      case "oldest":
        return [...fetchPosts].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      case "mostLiked":
        return [...fetchPosts].sort((a, b) => b.likes - a.likes);
      default:
        return fetchPosts;
    }
    
  }

  const filteredPosts = fetchPosts.filter(fetchPost => 
    fetchPost.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fetchPost.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fetchPost.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedPosts = sortPosts(filteredPosts, sortOrder);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-[#E29D36] text-white p-4 flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className='bg-white'>
            <SheetHeader>
              <SheetTitle>メニュー</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                ログイン情報
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Book className="mr-2 h-4 w-4" />
                校則一覧
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChevronRight className="mr-2 h-4 w-4" />
                統計一覧
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <History className="mr-2 h-4 w-4" />
                過去の結果
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold">school rules</h1>
        <Button variant="ghost" size="icon" className="text-white">
          <Bell />
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto">
        <div className="space-y-4 mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="pl-8"
              placeholder="検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        {/* ソート順の選択 */}
      <select 
        value={sortOrder} 
        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        className="mb-4 p-2 border rounded"
      >
        <option value="latest">最新順</option>
        <option value="oldest">古い順</option>
        <option value="mostLiked">人気順</option>
      </select>
        </div>
        <div className="space-y-4">
          {/* Posts */}
          {fetchPosts.map((post) => (
            <Card key={post.id} onClick={() => setSelectedPost(post)} className="cursor-pointer">
              <CardHeader>
                <h3 className="font-bold">{post.title}</h3>
                {/* 投稿された日時を表示したい */}

                <p className="text-sm text-gray-500">{post.created_at}</p>
              </CardHeader>
              <CardContent>
                <p>{post.content}</p>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-sm text-gray-500">{post.category}</span>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Heart className="mr-2 h-4 w-4 fill-current" />
                  {post.likes}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* New post button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-[#E29D36] hover:bg-[#D18C25] text-white">
            <PlusCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle>校則変更の提案</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="タイトルを入力..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="カテゴリを選択" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="提案内容を入力..." />
            <Button className="w-full bg-[#E29D36] hover:bg-[#D18C25] text-white">投稿</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Post detail dialog */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className='bg-white'>
            <DialogHeader>
              <DialogTitle>{selectedPost.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{selectedPost.created_at}</span>
                <span>{selectedPost.category}</span>
              </div>
              <div className="text-sm text-gray-500">
                投稿者: {selectedPost.gender} / {selectedPost.age}
              </div>
              <p className="font-bold">{selectedPost.content}</p>
              <p>{selectedPost.details}</p>
              <Button variant="ghost" size="sm" className="text-red-500">
                <Heart className="mr-2 h-4 w-4 fill-current" />
                {selectedPost.likes}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}