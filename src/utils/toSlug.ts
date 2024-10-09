export function toSlug(s:string):string{
    var slug:string;
    var tab=s.split(" ");
    slug = tab.join("-");
    slug = slug.toLowerCase();
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return slug;
}


