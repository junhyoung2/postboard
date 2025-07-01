import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const PostList = () => {
    const POSTS_PAGE = 10;
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [current, setCurrent] = useState(1);

    //페이지 별 게시글을 가져오도록
    const fetchPosts = async () => {
        // const { data, error } = await supabase
        //     .from("posts")
        //     .select("id,title,users(nickname)");
        // if (!error) {
        //     setPosts(data);
        // }
        //.range (시작번호, 끝번호) page 1: 1 1~10, page2:11~
        const from = (current - 1) * POSTS_PAGE;
        const to = from + POSTS_PAGE - 1;
        const { data, error } = await supabase
            .from("posts")
            .select("id,title,users(nickname)")
            .range(from, to);
        if (!error) {
            setPosts(data);
        }
    };
    const fetPostsCount = async () => {
        const { count } = await supabase
            .from("posts")
            .select("id", { count: "exact", head: true });
        setTotal(count);
        setPage(Math.ceil(count / POSTS_PAGE));
    };
    useEffect(() => {
        // fetchPosts();
        fetPostsCount();
    }, []);
    useEffect(() => {
        fetchPosts();
    }, [current]);

    return (
        <div id="postlist">
            <h2>게시글 목록</h2>
            <p>총 게시글 : {total}</p>
            {/* <p>총 페이지 수 : {page}</p> */}
            <Link className="write" to="/write">게시글 작성</Link>
            <ul>
                {posts &&
                    posts.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to={`/post/${item.id}`}>
                                    {item.title}
                                    </Link>
                                   <p>{item.users.nickname}</p>
                                
                            </li>
                        );
                    })}
            </ul>
            {/* 페이지 설정 */}
            <div className="page-btn">
                {Array(page)
                    .fill(null)
                    .map((item, idx) => {
                        const pageNumber = idx + 1; //페이지번호는 1부터 시작
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrent(pageNumber);
                                }}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

export default PostList;
