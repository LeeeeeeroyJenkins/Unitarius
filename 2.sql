SELECT line.author, birthday, book, Count(*) as quantity
FROM (
SELECT Tabb.author, birthday, book FROM Tabb
LEFT JOIN Taba ON Taba.author = Tabb.author
UNION
SELECT Taba.author, birthday, book FROM Taba
LEFT JOIN Tabb ON Taba.author = Tabb.author
ORDER BY author) as line
GROUP BY line.author
HAVING  Count(*) > 1