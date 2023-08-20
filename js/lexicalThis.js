const lexical5 = {
    aFunc: function () {
        console.log(this);
        return function () {
            console.log(this);
        }
    }
}
//lexical5.aFunc()();

const lex6 = {
    aFunc: () => {
        console.log(this);

        return () => console.log(this);
    }
}
//lex6.aFunc()();

const lex56 = {
    aFunc: function () {
        console.log(this);

        return () => console.log(this);
    }
}
lex56.aFunc()();