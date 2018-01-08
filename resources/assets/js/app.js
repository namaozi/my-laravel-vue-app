// Laravelオススメの初期化設定
require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ExampleComponent from './components/ExampleComponent.vue';

import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

// ルート定義
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
const routes = [{
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    },
    {
        path: '/example',
        component: ExampleComponent
    }
];

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
const router = new VueRouter({
    routes // `routes: routes` の短縮表記
});

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
const root = new Vue({
    router
}).$mount('#root');