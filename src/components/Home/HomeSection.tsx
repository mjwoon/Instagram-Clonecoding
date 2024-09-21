import { getHomeArticles } from "../../redux/reducers/home/homeThunk";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import Article from "components/Common/Article";
import ExtraLoadingCircle from "./ExtraLoadingCircle";
import { useEffect } from "react";

const HomeSection = () => {
  const { articles, isLoading, isExtraArticleLoading } = useAppSelector(
    (state) => state.home
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getHomeArticles());
    };
    fetchData();
  }, [dispatch]);

  return (
    <section>
      {isLoading ||
        articles.map((article, index) => (
          <Article
            key={article.postId}
            article={article}
            isObserving={articles.length - 4 === index}
          />
        ))}
      {isExtraArticleLoading && <ExtraLoadingCircle />}
    </section>
  );
};

export default HomeSection;
