#include <QCoreApplication>
#include <QLibrary>

typedef size_t (*rust_add)(size_t left, size_t right);

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    QLibrary lib("rust");
    QString path = "../rust_lib/target/x86_64-pc-windows-msvc/release/rust_lib.dll";
    a.addLibraryPath(path);

    if(QLibrary::isLibrary(path)) {
        lib.setFileName(path);
        lib.load();
        if(lib.isLoaded()){
            qDebug() << "Ok\n";
            rust_add add =
                (rust_add) lib.resolve("add");
            if (add) {
                qDebug() << add(1, 2);
            } else {
                qDebug() << "Error: can't resolve function.";
            }
        }
        else{
            qDebug() << "Error " << lib.errorString() << "\n";
        }
    } else
        qDebug() << "Not a library\n";
    return a.exec();
}
