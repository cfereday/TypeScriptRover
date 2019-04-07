import {hello} from "./index";

test('prints hello world', () => {
    expect(hello()).toBe("Hello World");
});