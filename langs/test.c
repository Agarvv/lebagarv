#include <stdio.h>
#include <string.h>

int main() {
    char name[50];  
    char message[100] = "";

    printf("Dame tu nombre ;) "); 
    scanf("%s", name);  

    strcat(message, "Cute name, ");
    strcat(message, name);
    strcat(message, " Take care of you. love ya!");

    printf("%s\n", message); 
    return 0;
}
