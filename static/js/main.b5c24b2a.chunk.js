(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{28:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},33:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),r=s(21),a=s.n(r),c=(s(28),s(11)),o=s.n(c),l=s(22),j=s(4),p=s(5),u=s(7),d=s(6),m=(s(30),s(31),s(0)),v=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).setCurrentPage=function(e){alert(e),n.props.setCurrentPage(e)},n.state={loading:n.props.loading,movieLen:n.props.movieLen,postsPerPage:n.props.postsPerPage},n}return Object(p.a)(s,[{key:"render",value:function(){var e=this,t=[],s=this.props,n=s.movieLen,i=s.postsPerPage;console.log("pn:"+n),console.log("pn:"+i);for(var r=1;r<=Math.ceil(n/i);r++)t.push(r);console.log(t);var a=t.map((function(t){return Object(m.jsx)("span",{class:"page",onClick:function(){return e.setCurrentPage(t)},children:t})}));return Object(m.jsxs)("div",{id:"Pagination",children:[Object(m.jsxs)("span",{children:["\ud398\uc774\uc9c0\ub2f9 \ud3ec\uc2a4\ud2b8 \uac2f\uc218:",this.props.postsPerPage]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["\ucd1d \ud3ec\uc2a4\ud2b8 \uac2f\uc218:",this.props.movieLen]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{id:"page_list",children:a})]})}}]),s}(n.Component),g=(s(33),s(34),function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(j.a)(this,s),t.call(this,e)}return Object(p.a)(s,[{key:"render",value:function(){var e=Object(m.jsxs)("div",{id:"movie_genre",children:["genre:",this.props.genres.map((function(e){return Object(m.jsx)("span",{className:"genre",children:e})}))]});return Object(m.jsxs)("div",{id:"movie_posts",children:[Object(m.jsx)("div",{id:"movie_left",children:Object(m.jsxs)("div",{id:"left_comp",children:[Object(m.jsx)("span",{className:"cover_back",children:Object(m.jsx)("img",{src:this.props.medium_cover_image})}),Object(m.jsx)("span",{className:"down",children:"Download"})]})}),Object(m.jsx)("div",{id:"movie_right",children:Object(m.jsxs)("div",{id:"right_comp",children:[Object(m.jsx)("div",{className:"movie_title",children:this.props.title}),Object(m.jsx)("div",{className:"movie_year",children:this.props.year}),e,Object(m.jsxs)("div",{className:"movie_time",children:[this.props.runtime,"min"]}),Object(m.jsxs)("div",{className:"movie_rating",children:[Object(m.jsx)("img",{src:"./images/logo-imdb.svg"}),this.props.rating]}),Object(m.jsx)("div",{class:"movie_summary",children:this.props.summary})]})})]},this.props.id)}}]),s}(n.Component)),h=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).state={loading:n.props.loading,movieList:n.props.movieList},n}return Object(p.a)(s,[{key:"render",value:function(){var e=this.props,t=e.loading,s=e.movieList;return Object(m.jsxs)("div",{className:"MovieList",children:[t&&Object(m.jsx)("div",{children:" loading... "}),Object(m.jsx)("div",{children:s.map((function(e){return Object(m.jsx)(g,{medium_cover_image:e.medium_cover_image,title:e.title,year:e.year,genres:e.genres,runtime:e.runtime,rating:e.rating,summary:e.summary},e.id)}))})]})}}]),s}(n.Component),b=s(23),O=s.n(b),x=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).getMovies=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,console.log(t),n.setState({movieList:t.data.data.movies});case 5:case"end":return e.stop()}}),e)}))),n.setCurrentPage=function(e){alert(e),n.setState({currentPage:e})},n.currentPosts=function(e){var t=n.state,s=t.currentPage,i=t.postsPerPage,r=s*i,a=r-i;return e.slice(a,r)},n.state={movieList:[],loading:!1,currentPage:1,postsPerPage:3},n}return Object(p.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movieList,s=e.loading,n=e.postsPerPage;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{movieList:this.currentPosts(t),loading:s}),Object(m.jsx)(v,{postsPerPage:n,movieLen:t.length,setCurrentPage:this.setCurrentPage})]})}}]),s}(n.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,57)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),f()}},[[56,1,2]]]);
//# sourceMappingURL=main.b5c24b2a.chunk.js.map