-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cocktails" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "idApi" TEXT,
    "CretedByUser" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "iba" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "alcoholic" TEXT NOT NULL,
    "glass" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "drinkThumb" TEXT NOT NULL,
    "ingredient1" TEXT NOT NULL,
    "ingredient2" TEXT NOT NULL,
    "ingredient3" TEXT NOT NULL,
    "ingredient4" TEXT NOT NULL,
    "ingredient5" TEXT NOT NULL,
    "ingredient6" TEXT NOT NULL,
    "ingredient7" TEXT NOT NULL,
    "ingredient8" TEXT NOT NULL,
    "ingredient9" TEXT NOT NULL,
    "ingredient10" TEXT NOT NULL,
    "ingredient11" TEXT NOT NULL,
    "ingredient12" TEXT NOT NULL,
    "ingredient13" TEXT NOT NULL,
    "ingredient14" TEXT NOT NULL,
    "ingredient15" TEXT NOT NULL,
    "measure1" TEXT NOT NULL,
    "measure2" TEXT NOT NULL,
    "measure3" TEXT NOT NULL,
    "measure4" TEXT NOT NULL,
    "measure5" TEXT NOT NULL,
    "measure6" TEXT NOT NULL,
    "measure7" TEXT NOT NULL,
    "measure8" TEXT NOT NULL,
    "measure9" TEXT NOT NULL,
    "measure10" TEXT NOT NULL,
    "measure11" TEXT NOT NULL,
    "measure12" TEXT NOT NULL,
    "measure13" TEXT NOT NULL,
    "measure14" TEXT NOT NULL,
    "measure15" TEXT NOT NULL,

    CONSTRAINT "cocktails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_userId_key" ON "tokens"("userId");

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cocktails" ADD CONSTRAINT "cocktails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
