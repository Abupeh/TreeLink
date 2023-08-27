

class Struct {

};

class Page extends Struct {
    link!: Link<{}>
};

type Classes<T extends object = object> = {
    [k: string]: T;
}

class Link<TE extends Classes> {

}
