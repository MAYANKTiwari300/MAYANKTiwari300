#include <stdio.h>
int main() {
    int a;int b; int c;
    printf("Enter the a");
    scanf("%d",& a);

    printf("Enter the b");
    scanf("%d",& b);

    printf("Enter the c");
    scanf("%d",& c);
    
    if(a>b)
    {
        if(a>c)
        {
            printf("a is greatest");
        }
        else
        {
            printf("c is greatest");
        }
    }
    else if(b>a)
    {
        if(b>c)
        {
            printf("b is greatest");
        }
        else
        {
            printf("c is greatest");
        }
    }
    else
    {
        printf("c is greatest in all Three");
    }
    return 0;
}