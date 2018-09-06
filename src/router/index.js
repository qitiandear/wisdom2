import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tlevel from '@/components/Tlevel'
import Refund from '@/components/Refund'
import Charge from '@/components/Charge'
import Knots from '@/components/Knots'
import Course from '@/components/Course'
import Receipt from '@/components/Receipt'
import ClassManage from '@/components/ClassManage'
import CourseArrange from '@/components/CourseArrange'
import StudentMasterManage from '@/components/StudentMasterManage'
import DeptSetting from '@/components/DeptSetting'
import EmployeeManage from '@/components/EmployeeManage'
import RoleManage from '@/components/RoleManage'
import FundsReport from '@/components/FundsReport'
import OperationReport from '@/components/OperationReport'
import OtherReport from '@/components/OtherReport'
import H from '@/components/hs/H'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/tl',
		name: 'Tlevel',
		component: Tlevel
	}, {
		path: '/re',
		name: 'Refund',
		component: Refund
	}, {
		path: '/charge',
		name: 'Charge',
		component: Charge
	}, {
		path: '/knots',
		name: 'Knots',
		component: Knots
	}, {
		path: '/receipt',
		name: 'Receipt',
		component: Receipt
	}, {
		path: '/course',
		name: 'Course',
		component: Course
	}, {
		path: '/classManage',
		name: 'ClassManage',
		component: ClassManage
	}, {
		path: '/courseArrange',
		name: 'CourseArrange',
		component: CourseArrange
	}, {
		path: '/studentMasterManage',
		name: 'StudentMasterManage',
		component: StudentMasterManage
	}, {
		path: '/deptSetting',
		name: 'DeptSetting',
		component: DeptSetting
	}, {
		path: '/employeeManage',
		name: 'EmployeeManage',
		component: EmployeeManage
	}, {
		path: '/roleManage',
		name: 'RoleManage',
		component: RoleManage
	}, {
		path: '/fundsReport',
		name: 'FundsReport',
		component: FundsReport
	}, {
		path: '/operationReport',
		name: 'OperationReport',
		component: OperationReport
	}, {
		path: '/otherReport',
		name: 'OtherReport',
		component: OtherReport
	}, {
		path: '/H',
		name: 'H',
		component: H
	}]
})