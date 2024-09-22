'use client'


import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/src/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/app/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/app/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/app/components/ui/dialog"
import { Input } from "@/src/app/components/ui/input"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/app/components/ui/select"
import { Textarea } from "@/src/app/components/ui/textarea"
import { Bell, Book, ChevronRight, Heart, History, Menu, PlusCircle, Search, User } from "lucide-react"
import Select from './Select';



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

  type User = {
    name: string;
  }
  
  // 可能なorder値の定義
  type SortOrder = 'latest' | 'oldest' | 'mostLiked'

  export default function Page() {
    const [fetchPosts, setFetchPosts] = useState<Post[]>([])
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)
    const [sortOrder, setSortOrder] = useState<SortOrder>('latest')
    const [searchTerm, setSearchTerm] = useState("")
    const [user, setUser] = useState<User>()
    const router = useRouter()

    useEffect(() => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        router.push("/LoginPage")
      }
    }, [router])

  useEffect(() => {
    fetch('http://localhost:8000/posts').then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      setFetchPosts(data)
    })
  }, [])

  


  const handlePostSubmit = async () => {
    const title = (document.getElementById('post-title') as HTMLInputElement).value
    const category = (document.getElementById('post-category') as HTMLSelectElement).value
    const content = (document.getElementById('post-content') as HTMLTextAreaElement).value
    console.log("こんに愛火google」")
        // localStorageからユーザー情報を取得
        const storedUser = localStorage.getItem('user')
        const userId = storedUser ? JSON.parse(storedUser).user.id : null
    const postData = {
      title,
    content,
    category,
    user_id: userId,
    }

    const response = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    if (response.ok) {
      // 投稿が成功したらHomePageにリダイレクト
      router.push('/HomePage')
    } else {
      console.error('投稿に失敗しました')
      alert('投稿に失敗しました')
    }
  }

  console.log(user)

  // const [posts] = useState<Post[]>([
  //   { 
  //     id: 1, 
  //     title: "制服のスカート丈について",
  //     content: "スカート丈をもう少し短くしても良いのではないでしょうか。", 
  //     created_at: "5分前", 
  //     likes: 12, 
  //     category: "制服",
  //     gender: "女性",
  //     age: "2年生",
  //     details: "現在の校則では膝下5cmとなっていますが、膝上5cmまで認めてほしいです。夏場は特に暑いので、少し短くなることで快適になると思います。"
  //   },
  //   { 
  //     id: 2, 
  //     title: "髪色規制の緩和",
  //     content: "髪を染める程度をもう少し緩和してほしいです。", 
  //     created_at: "30分前", 
  //     likes: 8,
  //     category: "頭髪",
  //     gender: "男性",
  //     age: "3年生",
  //     details: "現在は黒髪のみ許可されていますが、茶色程度までは認めてほしいです。個性を表現する一つの方法として、髪色の選択肢を増やすことを提案します。"
  //   },
  // ])

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8000/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Post deleted successfully');
        setFetchPosts(fetchPosts.filter((post) => post.id !== postId));
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  
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
  console.log(sortedPosts);

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

          <SheetContent side="left" className="bg-white" >
            <SheetHeader>
              <SheetTitle>メニュー</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-4">
              <Link href="/userinfo" passHref>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                ログイン情報
              </Button>
              </Link>
              <Link href="/kousoku" passHref>
              <Button variant="ghost" className="w-full justify-start">
              <Book className="mr-2 h-4 w-4" />
                校則一覧
              </Button>
              </Link>
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
          {sortedPosts.map((post) => (
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
                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete(post.id)}>
        削除
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

        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>校則変更の提案</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input id="post-title" placeholder="タイトルを入力..." />
            <Select label="カテゴリ" id="post-category">
            <option value="高校１年生">高校１年生</option>
        <option value="高校２年生">高校２年生</option>
        <option value="高校３年生">高校３年生</option>

            </Select>
            <Textarea id="post-content" placeholder="提案内容を入力..." />
            <Button onClick={handlePostSubmit} className="w-full bg-[#E29D36] hover:bg-[#D18C25] text-white">投稿 </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Post detail dialog */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>

          <DialogContent className="bg-white">

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
