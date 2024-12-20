FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["lebagarv.csproj", "."]
RUN dotnet restore

WORKDIR "/src/."
COPY . .

RUN dotnet build "lebagarv.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "lebagarv.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "lebagarv.dll"]
