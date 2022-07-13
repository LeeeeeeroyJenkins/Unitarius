SELECT Taba.author, birthday, book FROM Taba
LEFT JOIN Tabb ON Taba.author = Tabb.author
UNION
SELECT Tabb.author, birthday, book FROM Tabb
LEFT JOIN Taba ON Taba.author = Tabb.author
ORDER BY author