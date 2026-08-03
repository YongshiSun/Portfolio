function createBook(leftContent, rightContent, pg_no, bm_no){
    document.getElementById("app");
    app.innerHTML = `
        <div class="planner_cover">
            <img class="bookmarks" id="this_page" src="images/Website Planner/full size/bookmark${bm_no}.png">
            <img class="bookmarks" src="images/Website Planner/full size/bookmark0.png">
            <img class="bookmarks" src="images/Website Planner/full size/bookmark2.png">
            <img class="bookmarks" src="images/Website Planner/full size/bookmark5.png">
            <div class="page3">
                <img class="bookmarks" src="images/Website Planner/full size/bookmark1.png">
                <img class="bookmarks" src="images/Website Planner/full size/bookmark3.png">
                <div class="page2">
                    <img class="bookmarks" src="images/Website Planner/full size/bookmark4.png">
                    <div class="page1">
                        <div class="page_wrapper"> <!--wraps page_bg and page_box together so they share the same dimensions-->
                        <img class="page_bg" src="images/Website Planner/full size/dotted_page.png">

                        <div class="page_box">
                            <div class="page_sides">
                                <div class="page_left page_print">
                                    ${leftContent}
                                </div>     
                                <div class="page_right page_print">
                                    ${rightContent}
                                </div> 
                            
                                <footer>
                                    ${pg_no}
                                </footer>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}