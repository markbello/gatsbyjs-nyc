import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { mount, render, shallow } from "enzyme"
import withTheme from "./withTheme"

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow
global.withTheme = withTheme
