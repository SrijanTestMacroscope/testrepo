function g() {
    return f();
}

function f() {
    return g();
}

function stackOverFlowOrInfiniteLoop() {
    return f();
}