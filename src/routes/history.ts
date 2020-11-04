import { History, createBrowserHistory } from "history";

import { BASE_PATH } from "./consts";

const history: History = createBrowserHistory({ basename: BASE_PATH });

export { history };
