# Proje 1

## Q1

> [22, 27, 16, 2, 18, 6] -> Start

> [2, 27, 16, 22, 18, 6] -> 1.Adım

> [2, 6, 16, 22, 18, 27] -> 2.Adım

> [2, 6, 16, 18, 22, 27] -> 3.Adım

## Q2

**Insertion Sort Big O Notation:**

$$n + (n-1) + (n-2) + ....$$
$$\frac{n*(n+1)}{2}$$
$$\frac{n^2+n}2{}$$
so, Big O notation = $O(n^2)$

> Worst Case = $O(n^2)$

> Average Case = $O(n^2)$

> Best Case = $O(n)$

## Q3

> Best Case = [2, 6, 16, 18, 22, 27]

> Worst Case = [27, 22, 18, 16, 6, 2]

## Q4

Dizi sıralandıktan sonra [2, 6, 16, 18, 22, 27] şeklinde olur. Bu durumda ise 18 sayısı array'imizin tam ortasında olduğundan dolayı **average case** en uygun olur.

---

## Soru

- [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

> [2, 3, 5, 8, 7, 9, 4, 15, 6] -> 1.Adım

> [2, 3, 4, 8, 7, 9, 5, 15, 6] -> 2.Adım

> [2, 3, 4, 8, 7, 5, 15, 6] -> 3.Adım

> [2, 3, 4, 5, 7, 8, 15, 6] -> 4.Adım
