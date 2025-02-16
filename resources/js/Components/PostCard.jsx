import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link as LinkIntertia } from "@inertiajs/react";
import ConditionalWrapper from "./ConditionalWrapper";
import { Button } from "./ui/button";
import { Heart, MessageCircle } from "lucide-react";
import CommentAdd from "./CommentAdd";
import CommentItem from "./CommentItem";

const PostCard = ({ isDetail = false, post, comments }) => {
    const { id, user, title, content, image, comments_count } = post || {};

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarFallback>{user?.name}</AvatarFallback>
                            </Avatar>
                            <p className="text-md font-medium">{user?.name}</p>
                        </div>
                    </div>
                </CardHeader>
                <ConditionalWrapper
                    condition={!isDetail}
                    wrapper={(children) => (
                        <LinkIntertia href={`/posts/${id}`}>
                            {children}
                        </LinkIntertia>
                    )}
                >
                    <CardContent>
                        <div className="rounded overflow-hidden w-full h-96 bg-gray-100">
                            <img
                                src={`/storage/${image}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="mt-3">
                            <p className="mb-3">{title}</p>
                            <p>{content}</p>
                        </div>
                    </CardContent>
                </ConditionalWrapper>
                <CardFooter className="flex flex-col items-start">
                    {isDetail ? (
                        <>
                            <div className="border-0 border-t border-solid border-gray-200 w-full" />
                            <div className="mt-4 flex flex-col gap-6 w-full">
                                {comments?.length > 0 &&
                                    comments?.map((comment) => (
                                        <CommentItem
                                            key={comment?.id}
                                            comment={comment}
                                        />
                                    ))}
                                <CommentAdd postId={id} />
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <LinkIntertia href={`/posts/${id}`}>
                                    <Button variant="ghost" size="icon">
                                        <Heart className="w-4 h-4" />
                                    </Button>
                                </LinkIntertia>
                                <p>{comments_count || 0}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <LinkIntertia href={`/posts/${id}`}>
                                    <Button variant="ghost" size="icon">
                                        <MessageCircle className="w-4 h-4" />
                                    </Button>
                                </LinkIntertia>
                                <p>{comments_count || 0}</p>
                            </div>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </>
    );
};

export default PostCard;
