import { DeskTop } from "../../index"
import { shallowMount } from '@vue/test-utils'

test("桌面组件测试", () => {
    const wrapper = shallowMount(DeskTop)
    wrapper.find('button').trigger('click').then(_ => {
        console.log(wrapper.text())
        expect(wrapper.html()).toMatchSnapshot()
    })
})