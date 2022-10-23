# Proje 2

### [16, 21, 11, 8, 12, 22] -> Merge Sort

## Q1

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
          [16,21,11,8,12,22]
ilk olarak dizi ortadan ikiye bölünür ve bu işlem tek eleman kalana kadar devam eder
    [16,21,11]          [8,12,22]

  [16, 21]  [11]      [8, 12]  [22]

  [16] [21] [11]      [8] [12] [22]
Bu kısımdan sonra ikili bir şekilde birleştirilerek tüme varılır.
  [16]  [11,21]        [8,12]  [22]

    [11,16,21]          [8,12,22]

          [8,11,12,16,21,22]
En son tüme varıldığında dizi sıralanmış olur.
```

## Q2

Big-O gösterimini yazınız.

- Worst case: **$O(n*\log{n})$**
- Average case: **$O(n*\log{n})$**
- Best case: **$O(n*\log{n})$**
