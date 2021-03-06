export const slidesData = [
  {
    title: "GraphQL & Apollo",
  },
  {
    title: "Companies using GraphQL",
    contentType: "image",
    url: 'https://i.imgur.com/BCJiAoU.png'
  },
  {
    title: "GraphQL Features",
    contentType: "list",
    items: [
      "Query your API to get exactly what you need",
      "Access many resources on single request",
      "Get predictable results with schema & type system"
    ]
  },
  {
    title: "GraphQL vs REST",
    contentType: "image",
    url: 'https://i.imgur.com/LELpIJO.png'
  },
  {
    title: "...one more request",
    contentType: "image",
    url: 'https://i.imgur.com/0jA0upb.png'
  },
  {
    title: "...and one more",
    contentType: "image",
    url: 'https://i.imgur.com/8clud56.png'
  },
  {
    title: "GraphQL: all you need with one query",
    contentType: "image",
    url: 'https://i.imgur.com/qbyEEIK.png'
  },
  {
    title: "The Schema Definition Language",
    contentType: "complex",
  },
  {
    title: "Fetching data with queries",
    contentType: "iframe",
    url: 'https://graphqlbin.com/qx2xHk'
  },
  {
    title: "Query with arguments",
    contentType: "iframe",
    url: 'https://graphqlbin.com/v2DXuO'
  },
  {
    title: "Writing data with mutations",
    contentType: "iframe",
    url: 'https://graphqlbin.com/wp2jsG'
  },
  {
    title: "Using Fragments",
    contentType: "iframe",
    url: 'https://graphqlbin.com/yP7osr'
  },
  {
    title: "Realtime updates with Subscriptions",
    contentType: "iframe",
    url: 'https://graphqlbin.com/L90ZtX'
  },
  {
    title: "GraphQL Disadvantages",
    contentType: "list",
    items: [
      "You need to learn how to set up GraphQL",
      "You need to send the queries from the client => extra code in your client",
      "You need to define the schema beforehand => extra work before you get results",
      "You need to have a graphql endpoint on your server",
      "Graphql queries are more bytes than simply going to a REST endpoint",
      "The server needs to do more processing"
    ]
  },
  {
    title: "Apollo Client",
    contentType: "list",
    items: [
      'Incrementally adoptable',
      'Universally compatible',
      'Simple to get started with',
      'Inspectable and understandable',
      'Built for interactive apps',
      'Small and flexible',
      'Community driven',
    ]
  },
  {
    title: "Apollo query example",
    contentType: "code",
    snippets: [
      '<span class="line"><span class="keyword">import</span> { ApolloClient } <span class="keyword">from</span> <span class="string">\'apollo-client\'</span>;</span><br><span class="line"><span class="keyword">import</span> { HttpLink } <span class="keyword">from</span> <span class="string">\'apollo-link-http\'</span>;</span><br><span class="line"><span class="keyword">import</span> { InMemoryCache } <span class="keyword">from</span> <span class="string">\'apollo-cache-inmemory\'</span>;</span><br><span class="line"></span><br><span class="line"><span class="keyword">const</span> client = <span class="keyword">new</span> ApolloClient({</span><br><span class="line">  link: <span class="keyword">new</span> HttpLink({ <span class="attr">uri</span>: <span class="string">\'https://q80vw8qjp.lp.gql.zone/graphql\'</span> }),</span><br><span class="line">  cache: <span class="keyword">new</span> InMemoryCache()</span><br><span class="line">});</span><br><span class="line"></span><br><span class="line">client.query({ <span class="attr">query</span>: gql<span class="string">`{ hello }`</span> }).then(<span class="built_in">console</span>.log);</span><br>',
      '<span class="line"><span class="keyword">import</span> React, { Component } <span class="keyword">from</span> <span class="string">\'react\'</span>;</span><br><span class="line"><span class="keyword">import</span> { graphql } <span class="keyword">from</span> <span class="string">\'react-apollo\'</span>;</span><br><span class="line"><span class="keyword">import</span> gql <span class="keyword">from</span> <span class="string">\'graphql-tag\'</span>;</span><br><span class="line"></span><br><span class="line"><span class="comment">// here we create a query operation</span></span><br><span class="line"><span class="keyword">const</span> MY_QUERY = gql<span class="string">`query { todos { text } }`</span>;</span><br><span class="line"></span><br><span class="line"><span class="comment">// We then can use the graphql container to pass the query results returned by MY_QUERY</span></span><br><span class="line"><span class="comment">// to a component as a prop (and update them as the results change)</span></span><br><span class="line"><span class="keyword">const</span> MyComponentWithData = graphql(MY_QUERY)(<span class="function"><span class="params">props</span> =&gt;</span><span class="regexp"> &lt;div&gt;...&lt;/div&gt;);</span></span><br>'
    ]
  },
  {
    title: "Time for some practice!",
  },
  {
    title: "Useful links",
    contentType: "list",
    items: [
      '<a href="http://graphql.org/learn/" target="_blank">Official GraphQL Docs</a>',
      `Apollo Integration:
      <ul>
        <li><a href="https://www.apollographql.com/docs/react/index.html" target="_blank">React</a></li>
        <li><a href="https://www.apollographql.com/docs/angular/" target="_blank">Angular</a></li>
        <li><a href="https://github.com/Akryum/vue-apollo" target="_blank">Vue</a></li>
      </ul>`,
      '<a href="https://developer.github.com/v4/" target="_blank">Github GraphQL API</a>',
    ]
  },

];
