select name, price from shelves

join bins on  shelves.shelfid = bins.shelfid
where shelves.shelfid = $1;