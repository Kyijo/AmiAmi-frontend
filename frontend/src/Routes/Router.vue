<script>
import Home from './Home.vue'
import Signin from './Signin.vue'
import Login from './Login.vue'
import Post from './Post.vue'
import NotFound from './NotFound.vue'

const routes = {
    '/' : Home,
    '/Login' : Login,
    '/Signin' : Signin,
    '/Post' : Post
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }

}
</script>