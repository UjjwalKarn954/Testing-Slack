"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Kinesisanalyticsv2ApplicationSnapshot = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot}
*/
var Kinesisanalyticsv2ApplicationSnapshot = /** @class */ (function (_super) {
    __extends(Kinesisanalyticsv2ApplicationSnapshot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationSnapshotConfig
    */
    function Kinesisanalyticsv2ApplicationSnapshot(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesisanalyticsv2_application_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationName = config.applicationName;
        _this._snapshotName = config.snapshotName;
        return _this;
    }
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "applicationName", {
        get: function () {
            return this.getStringAttribute('application_name');
        },
        set: function (value) {
            this._applicationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "applicationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "applicationVersionId", {
        // application_version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('application_version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "snapshotCreationTimestamp", {
        // snapshot_creation_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_creation_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "snapshotName", {
        get: function () {
            return this.getStringAttribute('snapshot_name');
        },
        set: function (value) {
            this._snapshotName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2ApplicationSnapshot.prototype, "snapshotNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Kinesisanalyticsv2ApplicationSnapshot.prototype.synthesizeAttributes = function () {
        return {
            application_name: cdktf.stringToTerraform(this._applicationName),
            snapshot_name: cdktf.stringToTerraform(this._snapshotName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Kinesisanalyticsv2ApplicationSnapshot.tfResourceType = "aws_kinesisanalyticsv2_application_snapshot";
    return Kinesisanalyticsv2ApplicationSnapshot;
}(cdktf.TerraformResource));
exports.Kinesisanalyticsv2ApplicationSnapshot = Kinesisanalyticsv2ApplicationSnapshot;
