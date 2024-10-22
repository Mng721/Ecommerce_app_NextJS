import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Product } from "~/app/_interfaces/product";

const SearchDropDownContent = (props: { listSearchProduct: any; fetchMoreItem: any; hasMore: any; }) => {
    const { listSearchProduct, fetchMoreItem, hasMore } = props;

    return (
        <div
            className={'md:absolute border-r-[1px] border-l-[1px] border-b-[1px] overflow-scroll rounded-b-md no-scrollbar max-h-[40vh] md:top-12 bg-white md:w-full border-solid border-black z-20 flex flex-col gap-1'}
            id="scrollableDiv"
        >
            {listSearchProduct.length > 0 ? (
                <InfiniteScroll
                    dataLength={listSearchProduct.length} //This is important field to render the next data
                    next={fetchMoreItem}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {listSearchProduct.map((item: Product, index: number) => {
                        return (
                            <div className="p-2 flex items-center justify-start flex-row hover:bg-slate-200" key={`item-${index}`}>
                                <div>{item.name}</div>
                            </div>
                        );
                    })}
                </InfiniteScroll>
            ) : (
                <div className="p-2 flex items-center justify-start flex-row">
                    No result found
                </div>
            )}
        </div>
    );
};

export default SearchDropDownContent;
