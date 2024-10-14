// 1. 导入 vitepress 主题
import Theme from "@escook/vitepress-theme";
// 2. 导入配套的 CSS 样式（此步骤不能省略）
import "@escook/vitepress-theme/style.css";
import './style/index.css'
import Confetti from "./components/confentti.vue" // 修正组件名称和路径

// 3. 把“导入”的主题“默认导出”即可
export default {
    extends: Theme,
    enhanceApp({ app }) {
        // 注册全局组件
        app.component('Confetti', Confetti) // 修正组件名称
    }
}
