// jest setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: Adapter() });

jest.mock('services/intl');
