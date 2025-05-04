import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity, Code, Github, GitMerge, GitPullRequest, Mail, MessageSquare, Slack, Terminal } from "lucide-react"

export default function DeveloperProfileCard() {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="h-12 bg-gradient-to-r from-emerald-500 to-teal-600" />
      <CardHeader className="relative pt-0 pb-4">
        <div className="flex justify-between items-start -mt-6">
          <Avatar className="h-16 w-16 border-4 border-background">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Alex Chen" />
            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">AC</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-1 mt-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-emerald-600 font-medium">Available</span>
          </div>
        </div>
        <div className="space-y-1.5 mt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Alex Chen</h3>
            <Badge variant="outline" className="text-xs font-normal">
              Senior DevOps Engineer
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Building scalable infrastructure and automating deployment pipelines
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pb-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Current Team</span>
            <span className="font-medium">Cloud Infrastructure</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Current Sprint</span>
            <span className="font-medium">Kubernetes Migration (Sprint 24)</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Skills</h4>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="rounded-md">
              Kubernetes
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              Docker
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              Terraform
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              AWS
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              CI/CD
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              Python
            </Badge>
            <Badge variant="secondary" className="rounded-md">
              Go
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Activity (Last 30 days)</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <GitPullRequest className="h-3.5 w-3.5 mr-1" />
                  Pull Requests
                </span>
                <span className="font-medium">24</span>
              </div>
              <Progress value={80} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <GitMerge className="h-3.5 w-3.5 mr-1" />
                  Merges
                </span>
                <span className="font-medium">18</span>
              </div>
              <Progress value={60} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <Code className="h-3.5 w-3.5 mr-1" />
                  Commits
                </span>
                <span className="font-medium">87</span>
              </div>
              <Progress value={70} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center text-muted-foreground">
                  <MessageSquare className="h-3.5 w-3.5 mr-1" />
                  Reviews
                </span>
                <span className="font-medium">32</span>
              </div>
              <Progress value={65} className="h-1.5" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <TooltipProvider>
          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send email</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Slack className="h-4 w-4" />
                  <span className="sr-only">Slack</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Message on Slack</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View GitHub profile</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Terminal className="h-4 w-4" />
                  <span className="sr-only">Terminal</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View terminal sessions</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <Button size="sm" className="gap-1.5">
          <Activity className="h-4 w-4" />
          View Activity
        </Button>
      </CardFooter>
    </Card>
  )
}
