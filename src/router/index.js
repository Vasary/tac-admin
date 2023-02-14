import {createRouter, createWebHistory} from 'vue-router'
import AttributeList from '../views/attribute/AttributeListView'
import Product from '../views/product/ProductView'
import AttributeCreateView from "../views/attribute/AttributeCreateView";
import Attribute from "../views/attribute/AttributeView";
import AttributeEditView from "../views/attribute/AttributeEditView";
import ProductCreate from "../views/product/ProductCreate";
import ProductListView from "../views/product/ProductListView";
import CategoryCreateView from "../views/category/CategoryCreateView";
import CategoryListView from "../views/category/CategoryListView";
import CategoryEditView from "../views/category/CategoryEditView";
import Category from "../views/category/CategoryView";
import UnitView from "../views/unit/UnitView";
import UnitListView from "../views/unit/UnitListView";
import UnitCreateView from "../views/unit/UnitCreateView";
import UnitEditView from "../views/unit/UnitEditView";
import ProductEdit from "../views/product/ProductEdit";
import LoginView from "~/views/login/LoginView";
import DashboardView from "~/views/dashboard/DashboardView";
import UserView from "~/views/user/UserView.vue";
import ListsView from "~/views/lists/ListsView.vue";
import ListCreateView from "~/views/lists/ListCreateView.vue";
import ListView from "~/views/lists/ListView.vue";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
    {
        path: '/login',
        component: LoginView,
        meta: {
            breadcrumb: 'login',
        },
    },
    {
        path: '/',
        redirect: {
            name: 'dashboard'
        },
        meta: {
            breadcrumb: 'home',
        },
        beforeEnter: authGuard,
    },
    {
        path: '/dashboard',
        component: DashboardView,
        name: 'dashboard',
        meta: {
            breadcrumb: 'dashboard',
        },
        beforeEnter: authGuard,
    },
    {
        path: '/users',
        component: UserView,
        name: 'users',
        meta: {
            breadcrumb: 'users',
        },
        beforeEnter: authGuard,
    },
    {
        path: '/lists',
        component: ListView,
        children: [
            {
                path: '',
                name: 'lists',
                component: ListsView,
                meta: {
                    breadcrumb: 'lists',
                },
                beforeEnter: authGuard,
            },
            {
                path: 'list-create',
                name: 'list-create',
                component: ListCreateView,
                meta: {
                    breadcrumb: 'create list',
                },
                beforeEnter: authGuard,
            }
        ],
    },
    {
        path: '/attributes',
        component: Attribute,
        children: [
            {
                path: '',
                name: 'attributes',
                component: AttributeList,
                meta: {
                    breadcrumb: 'attributes list',
                },
                beforeEnter: authGuard,
            },
            {
                path: ':id',
                name: 'attribute-edit',
                component: AttributeEditView,
                meta: {
                    breadcrumb(route) {
                        return `attribute: ${route.params.id}`
                    },
                },
                beforeEnter: authGuard,
            },
            {
                path: 'create',
                name: 'attribute-create',
                component: AttributeCreateView,
                meta: {
                    breadcrumb: 'new attribute'
                },
                beforeEnter: authGuard,
            },
        ]
    },
    {
        path: '/products',
        component: Product,
        children: [
            {
                path: '',
                name: 'products',
                component: ProductListView,
                meta: {
                    breadcrumb: 'products list',
                },
                beforeEnter: authGuard,
            },
            {
                path: 'create',
                name: 'product-create',
                component: ProductCreate,
                meta: {
                    breadcrumb: 'new product',
                },
                beforeEnter: authGuard,
            },
            {
                path: ':id',
                name: 'product-edit',
                component: ProductEdit,
                meta: {
                    breadcrumb(route) {
                        return `product: ${route.params.id}`
                    },
                },
                beforeEnter: authGuard,
            },
        ]
    },
    {
        path: '/category',
        component: Category,
        children: [
            {
                path: '',
                name: 'categories',
                component: CategoryListView,
                meta: {
                    breadcrumb: 'categories list',
                },
                beforeEnter: authGuard,
            },
            {
                path: ':id',
                name: 'category-edit',
                component: CategoryEditView,
                meta: {
                    breadcrumb(route) {
                        return `category: ${route.params.id}`
                    },
                },
                beforeEnter: authGuard,
            },
            {
                path: 'create',
                name: 'category-create',
                component: CategoryCreateView,
                meta: {
                    breadcrumb: 'new category',
                },
                beforeEnter: authGuard,
            },
        ]
    },
    {
        path: '/unit',
        component: UnitView,
        children: [
            {
                path: '',
                name: 'units',
                component: UnitListView,
                meta: {
                    breadcrumb: 'units list',
                },
                beforeEnter: authGuard,
            },
            {
                path: ':id',
                name: 'unit-edit',
                component: UnitEditView,
                meta: {
                    breadcrumb(route) {
                        return `unit: ${route.params.id}`
                    },
                },
                beforeEnter: authGuard,
            },
            {
                path: 'create',
                name: 'unit-create',
                component: UnitCreateView,
                meta: {
                    breadcrumb: 'new unit',
                },
                beforeEnter: authGuard,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory('/admin'),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

export default router
