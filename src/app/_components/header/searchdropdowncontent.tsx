import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Product } from "~/app/_interfaces/product";

const SearchDropDownContent = (props: { listSearchProduct: any; fetchMoreItem: any; hasMore: any; }) => {
    const { listSearchProduct, fetchMoreItem, hasMore } = props;

    return (
        <div
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
                            <div className="p-2 flex items-center justify-start flex-row hover:bg-slate-200">
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
