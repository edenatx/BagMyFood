/// <reference path="./common/types/faketypes/enzymeAdapter.d.ts"/>

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';
import 'jest-enzyme';

// tslint:disable-next-line:no-any
(enzyme as any).configure({ adapter: new Adapter() });