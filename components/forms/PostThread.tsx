'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { usePathname, useRouter } from "next/navigation"

// import { updateUser } from "@/lib/actions/user.actions"
import { ThreadValidation } from "@/lib/validations/thread"

interface Props {
    user : {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    }
    btnTitle: string
}

function PostThread({userId} : {userId: string}) {
    const router = useRouter()
    const pathname = usePathname()

    const onSubmit = async () => {

    }
    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread: '',
            accountId: userId
        }
    })

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="flex flex-col gap-10 justify-start"
            >
                <FormField
                    control={form.control}
                    name="thread"
                    render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                    <FormLabel className="text-base-semibold text-light-2">
                        Content
                    </FormLabel>
                    <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                        <Textarea
                            rows={15}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
                )}
                />
                <Button 
                    type="submit"
                    className="bg-primary-500"
                >
                    Post Thread
                </Button>
            </form>
        </Form>
    )
}

export default PostThread