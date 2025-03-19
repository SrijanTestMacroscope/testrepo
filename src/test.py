def f():
    return g()

def g():
    return f()

def oops():
    f()